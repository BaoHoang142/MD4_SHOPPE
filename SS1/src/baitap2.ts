function isValid(s: string): boolean {
    const stack: string[] = [];
    const object: { [key: string]: string } = { ")": "(", "}": "{", "]": "[" };//key:value phải cùng kiểu dữ liệu
    for (const element of s) {
      console.log(element);
      if (element in object) {
        const topElement = stack.pop();
        if (object[element] !== topElement) return false;
      } else {
        stack.push(element);
      }
    }
    return true;
  }
  const s: string = "{()}[()]";
  
  if (isValid(s)) {
    console.log("Chuỗi ngoặc là hợp lệ.");
  } else {
    console.log("Chuỗi ngoặc không hợp lệ.");
  }