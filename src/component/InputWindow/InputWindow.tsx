interface InputWindowProps {
  input: string;
  setInput: (customInput: string) => void;
}

const InputWindow: React.FC<InputWindowProps> = ({
  input = "",
  setInput,
}: InputWindowProps) => {
  return (
    <>
      {" "}
      <textarea
        rows={10}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={`Custom input`}
        className="focus:outline-none w-full border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white mt-2"
      ></textarea>
    </>
  );
};

export default InputWindow;
