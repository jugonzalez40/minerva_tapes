"use client";

import React from "react";
import Image from 'next/image';

export default function UserCard(props) {
  const { image, name } = props;

  return (
    <div>
      <h3>Bienvenido {name}</h3>
      <img src={image} width={200} height={200} />
    </div>
  );
}
