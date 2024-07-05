export default function Button(props) {
  const { className, text, type, handleClick } = props;
  return (
    <>
      <button className={className} onClick={handleClick}>
        {text}
      </button>
    </>
  );
}
