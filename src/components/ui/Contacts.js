import { contactsComponent } from '../../enums/contacts';

export const Contacts = (props) => {
	return (
		<div className={contactsComponent.CONTACTS_CONTAINER}>
			<img className={contactsComponent.CONTACTS_IMAGE} src={props.picture} />
			<p className={contactsComponent.CONTACTS_NAME}>{props.text}</p>
		</div>
	);
};
