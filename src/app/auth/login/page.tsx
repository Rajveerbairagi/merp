import LoginForm from '@/components/auth/LoginForm';
import OAuthButton from '@/components/auth/OAuthButton';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center py-16">
      <div className="space-y-4">
        <LoginForm />
        <OAuthButton />
      </div>
    </div>
  );
}