import { Checkbox, Typography } from "@material-tailwind/react";

interface CheckboxWithLinkProps {
  link: string;
}

function CheckboxWithLink({ link }: CheckboxWithLinkProps) {
  return (
    <Checkbox
      label={
        <Typography
          color="blue-gray"
          className="flex font-medium text-[14px]"
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          placeholder={""}
        >
          I agree with the
          <Typography
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            placeholder={""}
            as="a"
            href={link}
            target="_blank"
            color="blue"
            className="font-medium transition-colors text-blue-400 hover:text-blue-900 text-[14px]"
          >
            &nbsp;terms and conditions
          </Typography>
          .
        </Typography>
      }
      color="indigo"
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
      crossOrigin={undefined}
    />
  );
}

export default CheckboxWithLink;
