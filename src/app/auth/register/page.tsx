import RegisterForm from '@/components/auth/RegisterForm';
import OAuthButton from '@/components/auth/OAuthButton';

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center py-16">
      <div className="space-y-4">
        <RegisterForm />
        <OAuthButton />
      </div>
    </div>
  );
}