export default function Button({ text, id, className, onClick }) {
	return (
		<button type="button" className={className} id={id} onClick={onClick}>
			{text}
		</button>
	);
}
