export function getCount(count: number) {
  if (count < 0) return;
  if (count < 10000) {
    return count;
  } else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 10000) + '万';
  } else {
    return Math.floor(count / 10000000) / 10 + '亿';
  }
}

export function rangeArr(start: number, end: number): number[] {
  const len = end - start + 1;
  let step = start - 1;

  if (len <= 0) {
    return [];
  }

  return (Array as any).apply(null, { length: Math.abs(len) }).map(() => ++step);
}

// 给css3相关属性增加浏览器前缀，处理浏览器兼容性问题
const elementStyle = document.createElement('div').style;
const vendor = (() => {
  // 首先通过 transition 属性判断是何种浏览器
  let transformNames: any = {
    webkit: 'webkitTransform',
    Moz: 'MozTransform',
    O: 'OTransfrom',
    ms: 'msTransform',
    standard: 'Transform',
  };

  for (const key in transformNames) {
    if (elementStyle[transformNames[key]] !== undefined) {
      return key;
    }
  }
  return '';
})();

export function prefixStyle(style: string): any {
  if (!vendor) return '';
  if (vendor === 'standard') return style;
  return vendor + style.charAt(0).toUpperCase() + style.substr(1);
}

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// 随机算法
export function shuffle<T>(arr: T[]): T[] {
  const new_arr: any[] = [];
  arr.forEach((item) => {
    new_arr.push(item);
  });
  for (let i = 0; i < new_arr.length; i++) {
    let j = getRandomInt(0, i);
    let t = new_arr[i];
    new_arr[i] = new_arr[j];
    new_arr[j] = t;
  }
  return new_arr;
}
