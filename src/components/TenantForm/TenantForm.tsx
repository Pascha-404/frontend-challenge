import React from 'react';

const TenantForm = () => {
	return (
		<form>
			{' '}
			<div className='space-y-12'>
				<div className='border-b border-gray-900/10 pb-12'>
					<h2 className='text-2xl md:text-3xl font-semibold dark:text-white'>
						Wie lautet Ihr vollständiger Name?
					</h2>
					<div className='mt-16 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
						<div className='sm:col-span-4'>
							<label
								htmlFor='fullName'
								className='block text-sm font-normal leading-tight text-stone-600 dark:text-neutral-300'>
								Name eingeben
							</label>
							<div className='mt-2'>
								<div className='flex rounded-xl shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
									<input
										type='text'
										name='fullName'
										id='fullName'
										required
										autoComplete='fullName'
										className='block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
										placeholder='z.B. Maxima Mustermann'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='border-b border-gray-900/10 pb-12'>
					<h2 className='text-2xl md:text-3xl font-semibold dark:text-white'>
						Wie lautet Ihre E-Mail Adresse?
					</h2>
					<p className='mt-4 text-base md:text-lg leading-6 text-gray-600'>
						Verwenden Sie eine aktive Adresse, an der sie E-Mails empfangen können.
					</p>
					<div className='mt-16 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
						<div className='sm:col-span-4'>
							<label
								htmlFor='email'
								className='block text-sm font-normal leading-tight text-stone-600 dark:text-neutral-300'>
								E-Mail eingeben
							</label>
							<div className='mt-2'>
								<div className='flex rounded-xl shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
									<input
										type='email'
										name='email'
										id='email'
										required
										autoComplete='email'
										className='block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
										placeholder='z.B. M.Mustermann@gmail.com'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='border-b border-gray-900/10 pb-12'>
					<h2 className='text-2xl md:text-3xl font-semibold dark:text-white'>
						Wie lautet Ihre Telefonnummer?
					</h2>
					<div className='mt-16 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
						<div className='sm:col-span-4'>
							<label
								htmlFor='phoneNumber'
								className='block text-sm font-normal leading-tight text-stone-600 dark:text-neutral-300'>
								Telefonnummer eingeben
							</label>
							<div className='mt-2'>
								<div className='flex rounded-xl shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
									<input
										type='tel'
										name='phoneNumber'
										id='phoneNumber'
										required
										autoComplete='phoneNumber'
										className='block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
										placeholder='z.B. 0151 XXXX XXX'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='border-b border-gray-900/10 pb-12'>
					<h2 className='text-2xl md:text-3xl font-semibold dark:text-white'>
						Angaben zum Einkommen
					</h2>
					<p className='mt-4 text-base md:text-lg leading-6 text-gray-600'>
						Wie hoch ist das ungefähre Nettoeinkommen für Ihren Haushalt?
					</p>

					<div className='mt-10 space-y-10'>
						<fieldset>
							<div className='mt-6 space-y-6'>
								<div className='h-full w-full flex items-center justify-between gap-x-3 border-2 rounded-xl shadow-sm  hover:border-black focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md px-3 py-1.5'>
									<label
										htmlFor='push-everything'
										className='cursor-pointer w-full block text-sm font-medium leading-6 text-gray-900'>
										Everything
									</label>
									<input
										id='push-everything'
										name='push-notifications'
                                        type='radio'
										className='cursor-pointer h-4'
									/>
								</div>
							</div>
						</fieldset>
					</div>
				</div>
            </div>
            
			<div className='mt-6 flex items-center justify-end gap-x-6'>
				<button type='button' className='text-sm font-semibold leading-6 text-gray-900'>
					Zurück
				</button>
				<button
					type='submit'
					className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
					Weiter
				</button>
			</div>
		</form>
	);
};

export default TenantForm;
