import { Button as NextButton } from "@nextui-org/react"
import type { FC } from "react"

type Props = {
  children: React.ReactNode
  icon: JSX.Element
  className: string
  type?: "button" | "submit" | "reset"
  fullWidth?: boolean
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | undefined
}
export const Button: FC<Props> = ({
  children,
  className,
  icon,
  type,
  color,
  fullWidth,
}) => {
  return (
    <NextButton
      startContent={icon}
      size="lg"
      color={color}
      variant="light"
      className={className}
      type={type}
      fullWidth={fullWidth}
    >
      {children}
    </NextButton>
  )
}
