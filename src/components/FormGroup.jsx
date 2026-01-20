export default function FormGroup({ ref,label, type, id, className }) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}:</label>
      <input ref={ref} type={type} id={id} className={className} />
      
    </div>
  );
}