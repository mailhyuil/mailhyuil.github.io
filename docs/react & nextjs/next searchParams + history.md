# next searchParams + history

```tsx
export function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const current = searchParams.get("page");
  const [selectedPage, setSelectedPage] = useState<string>(current || "1");

  useEffect(() => {
    const current = searchParams.get("page");
    if (!current) {
      const params = new URLSearchParams(searchParams);
      params.set("page", "1");
      router.replace(`?${params.toString()}`);
    } else {
      setSelectedPage(current);
    }
  }, [searchParams, router]);

  const onSelect = (page: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page);
    router.push(`?${params.toString()}`);
  };
  return (
    <div>
      <h1>Page {selectedPage}</h1>
      <p>Search params: {JSON.stringify(Object.fromEntries(searchParams.entries()))}</p>
      {Array.from({ length: 10 }).map((_, index) => (
        <div
          className={`p-4 border ${selectedPage === (index + 1).toString() ? "bg-blue-500 text-white" : ""}`}
          key={index}
          onClick={() => onSelect((index + 1).toString())}
        >
          <p>Item {index + 1}</p>
        </div>
      ))}
    </div>
  );
}
```
