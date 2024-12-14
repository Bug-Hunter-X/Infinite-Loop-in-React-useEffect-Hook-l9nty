```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: The effect only runs once on mount 
    // and does not trigger itself again.
    let interval = setInterval(() => {
        setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div>Count: {count}</div>;
}
```