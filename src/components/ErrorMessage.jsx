import { TbFaceIdError } from "react-icons/tb";

export default function ErrorMessage() {
  return (
    <div className=" mt-20 flex flex-col justify-center items-center">
      <div className="mb-4">
        <TbFaceIdError size={100} />
      </div>
      <h2 className="font-black text-4xl">Ooops. Something has gone wrong! </h2>
    </div>
  );
}
