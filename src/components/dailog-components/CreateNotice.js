import { Svgs } from '../../enums';
import { CheckBox, ExpireDate, Button, FormText, SvgIcon } from '../ui';
import { useRef } from 'react';
export const CreateNotice = ({
	handleBackBtn,
	setPublishDate,
	publishDate,
}) => {
	function valueReturned(data) {
		console.log(data);
	}
	const inputElement = useRef();
	const focusInput = () => {
		inputElement.current.showPicker();
	};
	return (
		<div className="wraper-component">
			<button className="back-button">
				<div className="arrow" onClick={handleBackBtn}>
					{'<-'}
				</div>
				Back
			</button>

			<div className="saveTemplate-button-component">
				<Button
					title="Save Template"
					buttonType="secondary-large-default"
				></Button>
			</div>

			<>
				<div className="createNotice-text-component">Create Notice</div>

				<div className="noticeTitle-component">
					<FormText
						noOfLines={1}
						keyName={'noticeTitle'}
						outputValue={valueReturned}
						label={'Notice Title'}
						placeholder={'Enter Notice Title'}
					/>
				</div>

				<div className="noticeDescription-component">
					<FormText
						noOfLines={4}
						keyName={'noticeDescription'}
						outputValue={valueReturned}
						label={'Notice Description'}
						placeholder={'Enter Description Title'}
					/>
				</div>
			</>

			<div className="checkBox-main-component">
				<div>
					<div className="checkBox-text-component">This Notice is for ?</div>
					<div className="checkbox-aling-component">
						<CheckBox id={'everyone'} name={'Everyone'} />
						<CheckBox id={'teacher'} name={'Teacher'} />
						<CheckBox id={'parents'} name={'Parents'} />
					</div>
				</div>
				<div className="expireDates-component">
					<ExpireDate label={'Expire Date'} date={'July 12, 2023'} />
				</div>
			</div>

			<div className="setPublicDate-component">
				<span> Set Public date </span>
				<div className="publish-date-time">{publishDate}</div>
				<input
					ref={inputElement}
					type="datetime-local"
					id="publish-date-time"
					name="publish-date-time"
					onChange={(e) => {
						setPublishDate(e.target.value);
					}}
				></input>
				<label for="publish-date-time" onClick={focusInput}>
					<SvgIcon iconName={Svgs.DOUBLE_ARROW} />
				</label>
			</div>

			<div className="allButton-component">
				<div className="publish-button-component">
					<Button title="Publish" buttonType="primary-medium-default"></Button>
				</div>

				<div className="saveDraft-button-component">
					<Button
						title="Save as draft"
						buttonType="secondary-medium-default"
					></Button>
				</div>

				<div className="approve-button-component">
					<Button
						title="Approve"
						buttonType="secondary-medium-default"
					></Button>
				</div>
			</div>
		</div>
	);
};
