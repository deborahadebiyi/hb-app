import clsx from "clsx";

export default function BookingStatus({ noShow }: { noShow: boolean }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-2 py-1 text-sm",
        {
          "bg-gray-100 text-gray-500": noShow === true,
          "bg-green-500 text-white": noShow === false,
        }
      )}
    />
    // ...
  );
}
