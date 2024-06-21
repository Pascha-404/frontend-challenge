import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import TenantForm from './TenantForm';
import { IFormData, useFormStore } from '@/store/useFormStore';

const defaultFormState: IFormData = {
	fullName: '',
	email: '',
	phoneNumber: '',
	salary: '',
};

// Create a helper component to wrap TenantForm and set the initial state
const TenantFormWrapper: React.FC<{
	initialFormState: Partial<IFormData>;
	initialPageState: number;
}> = ({ initialFormState, initialPageState }) => {
	const setPage = useFormStore(state => state.setPage);
	const setFormData = useFormStore(state => state.setFormData);

	React.useEffect(() => {
		// Merge the initial form state with the default form state
		const mergedFormState = { ...defaultFormState, ...initialFormState };
		// Reset the store to the initial state
		setPage(initialPageState);
		setFormData(mergedFormState);
	}, [initialFormState, initialPageState, setPage, setFormData]);

	return <TenantForm />;
};

// Helper function to render the component with a specific initial state
const renderComponent = (
	initialFormState: Partial<IFormData> = {},
	initialPageState: number = 0
) => {
	return render(
		<TenantFormWrapper
			initialFormState={initialFormState}
			initialPageState={initialPageState}
		/>
	);
};

describe('TenantForm Component', () => {
	// Test if the component renders correctly with the initial page
	it('renders the form correctly', async () => {
		renderComponent();
		await waitFor(() => expect(screen.getByRole('form')).toBeInTheDocument());
		await waitFor(() => expect(screen.getByTestId('progressbar')).toBeInTheDocument());
		await waitFor(() =>
			expect(screen.getByText('Wie lautet Ihr vollständiger Name?')).toBeInTheDocument()
		);
		await waitFor(() =>
			expect(screen.getByLabelText('Name eingeben')).toBeInTheDocument()
		);
		await waitFor(() => expect(screen.getByPlaceholderText('z.B. Maxima Mustermann')));
		await waitFor(() => expect(screen.getByText('Weiter')).toBeDisabled());
		await waitFor(() => expect(screen.queryByText('Zurück')).not.toBeInTheDocument());
	});

	// Test the handleChange function
	it('calls handleChange and updates state correctly', async () => {
		renderComponent();
		const nameInput = screen.getByLabelText('Name eingeben');
		fireEvent.change(nameInput, { target: { value: 'Maxima Mustermann' } });
		await waitFor(() => expect(nameInput).toHaveValue('Maxima Mustermann'));
	});

	// Test if the component switches to the next page on 'Weiter' button click
	it('navigates to the next page when "Weiter" button is clicked', async () => {
		renderComponent({ fullName: 'Maxima Mustermann' });
		const nextButton = screen.getByText('Weiter');
		fireEvent.click(nextButton);
		await waitFor(() =>
			expect(screen.getByLabelText('E-Mail eingeben')).toBeInTheDocument()
		);
		await waitFor(() => expect(screen.getByText('Zurück')).toBeInTheDocument());
		await waitFor(() => expect(screen.getByText('Weiter')).toBeDisabled());
	});

	// Test if the component switches to the previous page on 'Zurück' button click
	it('navigates to the previous page when "Zurück" button is clicked', async () => {
		renderComponent({ fullName: 'Maxima Mustermann' }, 1);
		await waitFor(() =>
			expect(screen.getByLabelText('E-Mail eingeben')).toBeInTheDocument()
		);
		const prevButton = screen.getByText('Zurück');
		fireEvent.click(prevButton);
		await waitFor(() =>
			expect(screen.getByText('Wie lautet Ihr vollständiger Name?')).toBeInTheDocument()
		);
	});

	// Test if the phoneNumber page renders correctly
	it('renders the form on the third page with phone number', async () => {
		renderComponent({ phoneNumber: '123456789' }, 2);
		await waitFor(() =>
			expect(screen.getByText('Wie lautet Ihre Telefonnummer?')).toBeInTheDocument()
		);
		await waitFor(() =>
			expect(screen.getByLabelText('Telefonnummer eingeben')).toHaveValue('123456789')
		);
		await waitFor(() => expect(screen.getByText('Zurück')).toBeInTheDocument());
	});

	// Test if the salary page renders correctly
	it('renders the form on the fourth page with salary options', async () => {
		renderComponent({}, 3);
		await waitFor(() =>
			expect(screen.getByText('Angaben zum Einkommen')).toBeInTheDocument()
		);
		await waitFor(() =>
			expect(screen.getByText('Einkommen auswählen')).toBeInTheDocument()
		);
		await waitFor(() => expect(screen.getByText('Zurück')).toBeInTheDocument());
		await waitFor(() => expect(screen.getByText('Zusammenfassung')).toBeInTheDocument());
	});

	// Test if the summary page renders correctly
	it('renders the summary page correctly', async () => {
		renderComponent(
			{
				fullName: 'Maxima Mustermann',
				email: 'M.Mustermann@example.com',
				phoneNumber: '017712345',
				salary: '>4000',
			},
			4
		);
		await waitFor(() =>
			expect(screen.getByText('Mieter/in Informationen')).toBeInTheDocument()
		);
		await waitFor(() =>
			expect(screen.getByText('Vollständiger Name')).toBeInTheDocument()
		);
		await waitFor(() =>
			expect(screen.getByText('Maxima Mustermann')).toBeInTheDocument()
		);
		await waitFor(() => expect(screen.getByText('E-Mail Adresse')).toBeInTheDocument());
		await waitFor(() =>
			expect(screen.getByText('M.Mustermann@example.com')).toBeInTheDocument()
		);
		await waitFor(() => expect(screen.getByText('Telefonnummer')).toBeInTheDocument());
		await waitFor(() => expect(screen.getByText('017712345')).toBeInTheDocument());
		await waitFor(() => expect(screen.getByText('Gehaltsangabe')).toBeInTheDocument());
		await waitFor(() => expect(screen.getByText('Mehr als 4000€')).toBeInTheDocument());
		await waitFor(() => expect(screen.getByText('Absenden')).toBeInTheDocument());
	});
});
