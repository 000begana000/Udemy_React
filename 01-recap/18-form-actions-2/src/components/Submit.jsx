import { useFormStatus } from "react-dom";

export default function Submit() {
  // const {pending, data, method, action} = useFormStatus();
  const { pending } = useFormStatus(); // boolean - submitted or not

  return (
    <p className="actions">
      <button type="submit" disabled={pending}>
        {pending ? "Submitting..." : "Submit"}
      </button>
    </p>
  );
}
