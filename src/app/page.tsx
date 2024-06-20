import TenantForm from '@/components/TenantForm';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col justify-between p-6 md:p-8 lg:p-10 xl:p-12 '>
			<TenantForm />
		</main>
	);
}
