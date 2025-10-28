import React, { useEffect } from 'react';


export default function useInit(initFunc, depends = []) {
  useEffect(() => {
    initFunc(false); 
  }, depends);
}
