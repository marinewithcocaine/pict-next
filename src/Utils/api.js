import axios from "axios";

class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  async getMainMeta() {
    try {
      const response = await axios.get(`${this.baseUrl}/pages/8`);
      const data = response.data;
      const meta = data.yoast_head_json;
      return meta;
    } catch (error) {
      console.error(error);
    }
  }

  async getMainPosts() {
    try {
      const response = await axios.get(`${this.baseUrl}/posts?_embed&tags=38&acf_format=standard&per_page=12`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async getMeta (pageSlug) {
    try {
      const response = await axios.get(`${this.baseUrl}/pages?slug=${pageSlug}`);
      const data = response.data[0];
      const meta = data.yoast_head_json;
      return meta;
    } catch (error) {
      console.error(error);
    }
  }

  async getContent() {
    try {
      const response = await axios.get(`${this.baseUrl}/posts?_embed&per_page=100`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async getCategories() {
    try {
      const categories = await axios.get(`${this.baseUrl}/categories`);
      categories.data.sort(function (a, b) {
        return b.count - a.count;
      });
      return categories.data;
    } catch (error) {
      console.error(error);
    }
  }

  async getCategoryInfo(slug) {
    try {
      const category = await axios.get(`${this.baseUrl}/categories?slug=${slug}`);
      if (!category) {
        return {
          notFound: true
        }
      };
      const categoryData = category.data[0];
      const meta = categoryData.yoast_head_json;
      const posts = await axios.get(`${this.baseUrl}/posts?_embed&per_page=100&categories=${categoryData.id}`);
      const postsData = posts.data;
      return {
        category: categoryData,
        meta: meta,
        projects: postsData
      }
    } catch (error) {
      console.error(error);
    }
  }

  async getServices() {
    try {
      const services = await axios.get(`${this.baseUrl}/services?_embed`);
      const data = services.data.sort(function (a, b) {
        return a.menu_order - b.menu_order;
      });
      return {
        services: data,
        meta: data.yoast_head_json,
        waiting: false
      }
    } catch (error) {
      console.error(error);
    }
  }

  async getService(slug) {
    try {
      const response = await axios.get(`${this.baseUrl}/services?slug=${slug}&_embed&acf_format=standard`);
      const data = response.data[0];
      const meta = data.yoast_head_json;
      return {
        service: data,
        meta: meta,
        waiting: false
      }
    } catch (error) {
      console.error(error);
    }
  }

  async getSliderPosts() {
    try {
      const response = await axios.get(`${this.baseUrl}/posts?_embed&tags=8&acf_format=standard`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async getServicePosts() {
    try {
      const response = await axios.get(`${this.baseUrl}/posts?_embed&tags=37&acf_format=standard&per_page=100`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async getContentFromCategory(id) {
    try {
      const response = await axios.get(`${this.baseUrl}/posts?_embed&per_page=100&categories=${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async getProject(slug) {
    try {
      const response = await axios.get(`${this.baseUrl}/posts?slug=${slug}&_embed`);
      if (!response) {
        return {
          notFound: true
        }
      };
      const data = response.data[0];
      const meta = data.yoast_head_json;
      const rec = await mainApi.getRecommendProjects(data.categories, data.id);
      const recData = rec;
      return {
        project: data,
        meta: meta,
        recProjects: recData,
        waiting: false
      }
    } catch (error) {
      console.error(error);
    }
  }

  async getRecommendProjects(catId, id) {
    try {
      const response = await axios.get(`${this.baseUrl}/posts?_embed&per_page=100&categories=${catId.join(',')}&exclude=${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
    } 
  }
}

export async function FormAction (formData, callBack) {
  formData.append('_wpcf7_unit_tag', '_wpcf7_unit_tag');
  const res = await fetch('http://api.pictdesign.ru/wp-json/contact-form-7/v1/contact-forms/5/feedback', {
    method: 'POST',
    body: formData
  });
  const data = await res.json();
  callBack(data);
}

export const mainApi = new Api({
  baseUrl: "http://api.pictdesign.ru/wp-json/wp/v2",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
