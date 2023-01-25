import { Button } from "@suid/material";
import { Component, createEffect, Setter } from "solid-js";
import Spinner from "solidjs-material-spinner";

export interface SignInButtonProps {
  loading: boolean;
  handleClick: () => void;
}
export const SignInButton: Component<SignInButtonProps> = ({
  loading,
  handleClick,
}) => {
  return <></>;
};
