export default function Button({ buttonText }: { buttonText: string }) {
  return (
    <>
      <button
        type="submit"
        className="bg-headingColor hover:bg-headingColor text-lg  text-white font-bold py-3  mb-6 px-4 rounded-lg"
      >
        {buttonText}
      </button>
    </>
  );
}
