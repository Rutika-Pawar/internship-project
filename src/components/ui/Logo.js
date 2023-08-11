import { Svgs } from '../../enums';
import SvgIcon from './SvgIcon';

export const Logo = () => {
	return (
		<>
			<SvgIcon iconName={Svgs.LOGO} height={50} width={200}></SvgIcon>
		</>
	);
};
