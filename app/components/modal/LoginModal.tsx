'use client';

import { useRouter } from 'next/navigation';
import Modal from './Modal';
import { useState } from 'react';
import Heading from '../Heading';

const LoginModal = () => {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Wellcome back" subtitle="Login to your account" />
    </div>
  );

  return <Modal isOpen body={bodyContent} title="Login" />;
};

export default LoginModal;
