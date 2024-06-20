'use client';

import React, { useState, useEffect } from 'react';
import { TSalary, useFormStore } from '@/store/useFormStore';

import TenantFormPage from '@/components/TenantFormPage';

const TenantForm = () => {
	let page = useFormStore(state => state.page);
	const { fullName, email, phoneNumber, salary } = useFormStore(state => state.formData);
	const setFormData = useFormStore(state => state.setFormData);
	const setPage = useFormStore(state => state.setPage);
	const [isPageValid, setIsPageValid] = useState(false);
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

	// Transforms text for the salary indication radio buttons
	const transformSalaryText = (text: string) => {
		return text.replace(/-/g, ' - ').replace(/>/g, 'Mehr als ') + '€';
	};

	// Stops default submit behaviour
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (page === 4) {
			alert('Data submitted');
		} else {
			nextPage();
		}
	};

	useEffect(() => {
		//Validate current page inputs
		if (page === 0) {
			setIsPageValid(!!fullName);
		} else if (page === 1) {
			setIsPageValid(!!email);
		} else if (page === 2) {
			setIsPageValid(!!phoneNumber);
		} else if (page === 3) {
			setIsPageValid(!!salary);
		}
	}, [fullName, email, phoneNumber, salary, page]);

	return (
		<form
			className='flex flex-col space-y-12 ring-1 p-12 ring-gray-200 rounded-3xl min-h-208 max-h-screen justify-between'
			onSubmit={handleSubmit}>
			{/* Code block for name page */}
			{page === 0 && (
				<TenantFormPage
					header='Wie lautet Ihr vollständiger Name?'
					labelText='Name eingeben'
					inputId='fullName'
					inputValue={fullName}
					placeholder='z.B. Maxima Mustermann'
					inputType='text'
					autoCompleteType='name'
					onChange={handleChange}
				/>
			)}

			{/* Code block for email page */}
			{page === 1 && (
				<TenantFormPage
					header='Wie lautet Ihre E-Mail Adresse?'
					subheader='Verwenden Sie eine aktive Adresse, an der sie E-Mails empfangen können.'
					labelText='E-Mail eingeben'
					inputId='email'
					inputValue={email}
					placeholder='z.B. M.Mustermann@gmail.com'
					inputType='email'
					autoCompleteType='email'
					onChange={handleChange}
				/>
			)}

			{/* Code block for phone number page */}
			{page === 2 && (
				<TenantFormPage
					header='Wie lautet Ihre Telefonnummer?'
					labelText='Telefonnummer eingeben'
					inputId='phoneNumber'
					inputValue={phoneNumber}
					placeholder='z.B. 0151 XXXX XXX'
					inputType='tel'
					autoCompleteType='tel'
					onChange={handleChange}
				/>
			)}

			{/* Code block for salary indication page */}
			{page === 3 && (
				<TenantFormPage
					header='Angaben zum Einkommen'
					subheader='Wie hoch ist das ungefähre Nettoeinkommen für Ihren Haushalt?'
					inputId='salary'
					inputValue={salary}
					inputType='radio'
					fieldset
					fieldsetLegend='Einkommen auswählen'
					fieldsetData={salaryOptions}
					onChange={handleChange}
					textTransform={transformSalaryText}
				/>
			)}

			{/* Code block for summary page */}
			{page === 4 && (
				<div>
					<div className='px-4 sm:px-0'>
						<h2 className='text-base font-semibold leading-7 text-gray-900'>
							Mieter/in Informationen
						</h2>
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
									{transformSalaryText(salary)}
								</dd>
							</div>
						</dl>
					</div>
				</div>
			)}

			{/* Code block for buttons */}
			<div
				className={`w-full mt-6 flex items-center gap-x-6 ${
					page !== 0 ? 'justify-between' : 'justify-end'
				}`}>
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
					type='submit'
					disabled={!isPageValid}
					className='rounded-2xl bg-black px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-stone-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400 disabled:bg-stone-500 disabled:cursor-not-allowed'>
					{page === 4 ? 'Absenden' : page === 3 ? 'Zusammenfassung' : 'Weiter'}
				</button>
			</div>
		</form>
	);
};

export default TenantForm;
