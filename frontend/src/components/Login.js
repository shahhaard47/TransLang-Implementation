import React from 'react';
import DropdownExampleSearchSelection from './SearchSelection';
import {Label} from 'semantic-ui-react';
    const loginOption = [
        {value: "english_us ", key: 'English (US)', text: 'English (US)', recogKey: 'en-US', transKey: 'en'},
        {value: "english_in", key: 'English (IN)', text: 'English (IN)', recogKey: 'en-IN', transKey: 'en'},
        {value: "german", key: 'Deutsche', text: 'Deutsche', recogKey: 'de-DE', transKey: 'de'},
        {value: "arabic", key: 'عربى', text: 'عربى', recogKey: 'ar-EG', transKey: 'ar'},
        {value: "spanish_mx", key: 'español', text: "español", recogKey: 'es-MX', transKey: 'es'},
        {value: "french_fr", key: 'français', text: 'français', recogKey: 'fr-FR', transKey: 'fr'},
        {value: "hindi", key: 'हिन्दी', text: 'हिन्दी', recogKey: 'hi-IN', transKey: 'hi'},
        {value: "korean", key: '한국어', text: '한국어', recogKey: 'ko-KR', transKey: 'ko'},
        {value: "russian", key: 'русский', text: 'русский', recogKey: 'ru-RU', transKey: 'ru'},
        {value: "chinese_simp", key: '普通话', text: '普通话', recogKey: 'zh-CN', transKey: 'zh-Hans'},
    ];

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    // handleChange = (e, { value }) => {
    //     console.log("Handle Change", value)
    //     this.setState({ value })
    // }

    render() {
        const { value } = this.state

        return (
            <div>
                <Label>
                    Select your preferred language
                </Label>
                <DropdownExampleSearchSelection value={value} onChange={this.props.changeSelectedLang} options={loginOption}/>   
            </div>
        )
    }
}

export default Login;