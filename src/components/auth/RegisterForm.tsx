import Input from '@/components/ui/Input';
import Button from '@/components/common/Button';

export default function RegisterForm() {
  return (
    <form className="space-y-4 max-w-md mx-auto p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center">Register</h2>
      <Input type="text" placeholder="Full Name" />
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Button className="w-full bg-blue-600 text-white">Sign Up</Button>
    </form>
  );
}