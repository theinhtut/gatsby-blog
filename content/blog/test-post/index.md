---
title: မြန်မာလိုးရေရအောင်
date: "2019-07-20T22:40:32.169Z"
description: တွေးမိတွေးရာလေးတွေ 🥙
featuredImage: "./blade.jpg"
anotherText: random again
---

ဒါမျိုးလေးတွေကို ရေးချင်နေတာ
```jsx{2}
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```