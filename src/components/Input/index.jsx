export function Input({
  placeholder,
  type = "text",
  value,
  onChange,
  ...attr
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      attr
    />
  );
}
