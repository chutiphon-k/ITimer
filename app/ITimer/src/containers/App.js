import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Actions, DefaultRenderer } from 'react-native-router-flux'
import { Container, Content, Footer, FooterTab, Button, Icon, Badge } from 'native-base'

export default class App extends Component {

	state = {
		footerTab: 0
	}

	switchTab(tab){
		switch(tab){
			case 0:
				Actions.competition({ type: "replace" })
				break
			case 1:
				Actions.timer({ type: "replace" })
				break
			case 2:
				Actions.user({ type: "replace" })
				break
		}
		this.setState({ footerTab: tab })
	}

	render(){
		return (
            <Container>
                <Content>
				   <DefaultRenderer 
						navigationState={this.props.navigationState.children[0]} 
						onNavigate={this.props.onNavigate} 
				   />
                </Content>
                <Footer >
                    <FooterTab>
                        <Button active={this.state.footerTab == 0} onPress={this.switchTab.bind(this, 0)}>
                            <Badge>2</Badge>
                            Competition
                            <Icon name='ios-apps-outline' />
                        </Button>
                        <Button active={this.state.footerTab == 1} onPress={this.switchTab.bind(this, 1)}>
                            Timer
                            <Icon name='ios-compass' />
                        </Button>
                        <Button active={this.state.footerTab == 2} onPress={this.switchTab.bind(this, 2)}>
                            User
                            <Icon name='ios-contact-outline' />
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
		)
	}
}