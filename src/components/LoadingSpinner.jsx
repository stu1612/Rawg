import { Oval } from "react-loader-spinner";

export default function LoadingSpinner() {
  return (
    <div className="absolute left-2/4 mt-20">
      <Oval
        height={80}
        width={80}
        color="#ff6961"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="white"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
}
