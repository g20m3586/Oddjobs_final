export default function FormInput({ label, type, value, onChange, name }) {
    return (
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">{label}</label>
        <input
          type={type}
          name={name}                // ✅ this was missing
          value={value}
          onChange={onChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
    );
  }
  