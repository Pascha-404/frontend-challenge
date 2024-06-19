'use client';

import { TSalary, useFormStore } from '@/store/useFormStore';
import React from 'react';

const TenantForm = () => {
	let page = useFormStore(state => state.page);
	const { fullName, email, phoneNumber, salary } = useFormStore(state => state.formData);
	const setFormData = useFormStore(state => state.setFormData);
	const setPage = useFormStore(state => state.setPage);
	const salaryOptions: TSalary[] = [
		'0-1000',
		'1000-2000',
		'2000-3000',
		'3000-4000',
		'>4000',
	];

	// Alters the value of the state which is provided through event.target.name
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ [event.target.name]: event.target.value });
	};

	// Takes the 'page' state and increments it by 1
	const nextPage = () => {
		setPage((page += 1));
	};

	// Takes the 'page' state and decrements it by 1
	const prevPage = () => {
		setPage((page -= 1));
	};

	return (
		<form>
			<div className='space-y-12'>
				{/* Code block for name page */}
				{page === 0 && (
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
											onChange={handleChange}
											value={fullName}
											autoComplete='fullName'
											className='block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
											placeholder='z.B. Maxima Mustermann'
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}

				{/* Code block for email page */}
				{page === 1 && (
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
											value={email}
											required
											onChange={handleChange}
											autoComplete='email'
											className='block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
											placeholder='z.B. M.Mustermann@gmail.com'
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}

				{/* Code block for phone number page */}
				{page === 2 && (
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
											onChange={handleChange}
											value={phoneNumber}
											autoComplete='phoneNumber'
											className='block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
											placeholder='z.B. 0151 XXXX XXX'
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}

				{/* Code block for salary indication page */}
				{page === 3 && (
					<div className='border-b border-gray-900/10 pb-12'>
						<h2 className='text-2xl md:text-3xl font-semibold dark:text-white'>
							Angaben zum Einkommen
						</h2>
						<p className='mt-4 text-base md:text-lg leading-6 text-gray-600'>
							Wie hoch ist das ungefähre Nettoeinkommen für Ihren Haushalt?
						</p>

						<div className='mt-10 space-y-10'>
							<fieldset>
								<legend className='mt-6 block text-sm font-normal leading-tight text-stone-600 dark:text-neutral-300'>
									Einkommen auswählen
								</legend>

								<div className='space-y-6'>
									{salaryOptions.map((item, idx) => (
										<div
											key={`salaryItem-${idx}`}
											className='mt-2 h-full w-full flex items-center justify-between gap-x-3 border-2 rounded-xl shadow-sm  hover:border-black focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md px-3 py-1.5'>
											<label
												htmlFor={`salaryItem-${idx}`}
												className='cursor-pointer w-full block text-sm font-medium leading-6 text-gray-900'>
												{item.replace(/-/g, ' - ').replace(/>/g, 'Mehr als ')}€
											</label>
											<input
												id={`salaryItem-${idx}`}
												name='salary'
												type='radio'
												onChange={handleChange}
												value={item}
												checked={salary === item}
												className='cursor-pointer h-4'
											/>
										</div>
									))}
								</div>
							</fieldset>
						</div>
					</div>
				)}
			</div>

			{/* Code block for summary page */}
			{page === 4 && (
				<div>
					<div className='px-4 sm:px-0'>
						<h3 className='text-base font-semibold leading-7 text-gray-900'>
							Mieter/in Informationen
						</h3>
						<p className='mt-1 max-w-2xl text-sm leading-6 text-gray-500'>
							Persönliche Daten
						</p>
					</div>
					<div className='mt-6 border-t border-gray-100'>
						<dl className='divide-y divide-gray-100'>
							<div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
								<dt className='text-sm font-medium leading-6 text-gray-900'>
									Vollständiger Name
								</dt>
								<dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
									{fullName}
								</dd>
							</div>
							<div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
								<dt className='text-sm font-medium leading-6 text-gray-900'>
									E-Mail Adresse
								</dt>
								<dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
									{email}
								</dd>
							</div>
							<div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
								<dt className='text-sm font-medium leading-6 text-gray-900'>
									Telefonnummer
								</dt>
								<dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
									{phoneNumber}
								</dd>
							</div>
							<div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
								<dt className='text-sm font-medium leading-6 text-gray-900'>
									Gehaltsangabe
								</dt>
								<dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
									{salary.replace(/-/g, ' - ').replace(/>/g, 'Mehr als ')}€
								</dd>
							</div>
						</dl>
					</div>
				</div>
			)}

			{/* Code block for buttons */}
			<div className='mt-6 flex items-center justify-end gap-x-6'>
				{/* Is not rendering when on page 0, to prevent falsie state value */}
				{page !== 0 && (
					<button
						type='button'
						onClick={prevPage}
						className='text-sm font-semibold leading-6 text-gray-900'>
						Zurück
					</button>
				)}
				<button
					onClick={nextPage}
					type='button'
					className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
					{page === 4 ? 'Absenden' : page === 3 ? 'Zusammenfassung' : 'Weiter'}
				</button>
			</div>
		</form>
	);
};

export default TenantForm;
