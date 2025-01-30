import React, { useState } from 'react';
import { YStack, Input, Button, Text } from 'tamagui';

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <YStack alignItems="center" justifyContent="center" minHeight="100vh" backgroundColor="$background">
      <YStack as="form" onSubmit={handleSubmit} padding="$4" borderRadius="$4" shadow="$2" width="100%" maxWidth={400}>
        <Text fontSize="$6" fontWeight="bold" marginBottom="$4" textAlign="center">Login</Text>
        <Input placeholder="Email" name="email" onChange={handleChange} marginBottom="$4" />
        <Input placeholder="Password" name="password" type="password" onChange={handleChange} marginBottom="$4" />
        <Button type="submit" backgroundColor="$primary" color="$white">Login</Button>
      </YStack>
    </YStack>
  );
};

export default LoginPage; 