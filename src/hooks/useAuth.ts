"use client";

import { useState } from 'react';
import { User } from '@/types/user';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, name: string) => {
    setUser({ id: '1', email, name });
  };

  const logout = () => {
    setUser(null);
  };

  return { user, login, logout };
}