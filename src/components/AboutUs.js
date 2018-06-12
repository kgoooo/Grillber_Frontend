import React, { Component} from 'react';

<<<<<<< HEAD
const AboutUs = () => {
	return (
		<div className="aboutUs">
			<h1 className="aboutUs__header">Our mission at Grillber</h1>
			<div className="aboutUs__copy__wrapper">
				<p className="aboutUs__copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.</p>
				<p className="aboutUs__copy">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum.</p>
=======
class AboutUs extends Component {
	constructor(props){
		super(props);

		this.state = {
			showingAv1: false,
			showingAv2: false,
			showingAv3: false,
			showingAv4: false,
			showingAv5: false,
			showingAv6: false,

		}
	}
	showCopy = (e) => {
		let employee = e.target.id;
		switch(employee){
			case '1':
				this.setState({ showingAv1: true});
				break;
			case '2':
				this.setState({ showingAv2: true});
				break;
			case '3':
				this.setState({ showingAv3: true});
				break;
			case '4':
				this.setState({ showingAv4: true});
				break;
			case '5':
				this.setState({ showingAv5: true});
				break;
			case '6':
				this.setState({ showingAv6: true});
				break;
		}
	};
	hideCopy = (e) => {
		let employee = e.target.id;
		switch(employee){
			case '1':
				this.setState({ showingAv1: false});
				break;
			case '2':
				this.setState({ showingAv2: false});
				break;
			case '3':
				this.setState({ showingAv3: false});
				break;
			case '4':
				this.setState({ showingAv4: false});
				break;
			case '5':
				this.setState({ showingAv5: false});
				break;
			case '6':
				this.setState({ showingAv6: false});
				break;
		}
	};
	render(){
		return(
			<div className="aboutUs">
				<h1 className="aboutUs__header">Our mission at Grillber</h1>
				<div className="aboutUs__copy__wrapper">
					<p className="aboutUs__copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.</p>
					<p className="aboutUs__copy">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum.</p>
				</div>
				<div className="aboutUs__who--box">
					<h1 className="aboutUs__header">Who we are</h1>
					<p className="aboutUs__copy">Hover over an employee to learn more about them.</p>
					<img id="2" onMouseEnter={this.showCopy} onMouseLeave={this.hideCopy} className="aboutUs__image" src="http://kgoehringer.io/resources/grillber/avatar_images/avatar_2.jpg" alt="avatar"/>
					<img id="1" onMouseEnter={this.showCopy} onMouseLeave={this.hideCopy} className="aboutUs__image" src="http://kgoehringer.io/resources/grillber/avatar_images/avatar_1.jpg" alt="avatar"/>
					<img id="6" onMouseEnter={this.showCopy} onMouseLeave={this.hideCopy} className="aboutUs__image" src="http://kgoehringer.io/resources/grillber/avatar_images/avatar_6.jpg" alt="avatar"/>
					<img id="3" onMouseEnter={this.showCopy} onMouseLeave={this.hideCopy} className="aboutUs__image" src="http://kgoehringer.io/resources/grillber/avatar_images/avatar_3.jpg" alt="avatar"/>
					<img id="5" onMouseEnter={this.showCopy} onMouseLeave={this.hideCopy} className="aboutUs__image" src="http://kgoehringer.io/resources/grillber/avatar_images/avatar_5.jpg" alt="avatar"/>
					<img id="4" onMouseEnter={this.showCopy} onMouseLeave={this.hideCopy} className="aboutUs__image" src="http://kgoehringer.io/resources/grillber/avatar_images/avatar_4.jpg" alt="avatar"/>
				</div>
				<div className="aboutUs__emplCopy__box">
					{this.state.showingAv1 === true ? <div><h3 className="aboutUs__empl__Name">Teodoro Sliter</h3><p className="aboutUs__empl__Copy">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci phasellus egestas tellus rutrum tellus pellentesque eu
						tincidunt. Tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum. Sapien et ligula ullamcorper malesuada
						proin. Orci ac auctor augue mauris. Aenean euismod elementum nisi quis eleifend. Gravida neque convallis a cras semper. Nulla
						facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Pellentesque dignissim enim sit amet venenatis urna cursus. Vitae
						suscipit tellus mauris a diam maecenas sed.
					</p></div> : null}

					{this.state.showingAv2 === true ? <div><h3 className="aboutUs__empl__Name">Suzette Nuzzo</h3><p className="aboutUs__empl__Copy">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Integer quis auctor elit sed vulputate mi. Aliquam nulla facilisi cras fermentum. In aliquam sem
						fringilla ut. In fermentum posuere urna nec. Ac turpis egestas sed tempus urna. Cursus sit amet dictum sit amet justo. Nulla at
						volutpat diam ut venenatis tellus in metus. In arcu cursus euismod quis. Facilisi nullam vehicula ipsum a arcu cursus vitae congue
						mauris. Magna fermentum iaculis eu non diam phasellus vestibulum.
					</p></div> : null}

					{this.state.showingAv3 === true ? <div><h3 className="aboutUs__empl__Name">Rodrick Francois</h3><p className="aboutUs__empl__Copy">
						Turpis in eu mi bibendum neque egestas congue quisque egestas.
						Pharetra massa massa ultricies mi quis. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Ipsum faucibus vitae
						aliquet nec ullamcorper sit amet risus nullam. Integer vitae justo eget magna. Ac orci phasellus egestas tellus rutrum tellus
						pellentesque. Morbi tristique senectus et netus et. Est velit egestas dui id. Sed blandit libero volutpat sed cras. Facilisis
						volutpat est velit egestas dui id ornare arcu odio.
					</p></div> : null}

					{this.state.showingAv4 === true ? <div><h3 className="aboutUs__empl__Name">Myles Lanni</h3><p className="aboutUs__empl__Copy">
						Luctus venenatis lectus magna fringilla urna porttitor. Viverra adipiscing at in tellus. Dictum at tempor commodo ullamcorper
						a lacus vestibulum sed. Tristique sollicitudin nibh sit amet commodo nulla facilisi. Vulputate eu scelerisque felis imperdiet
						proin fermentum leo vel. Nisi est sit amet facilisis magna etiam tempor. Venenatis urna cursus eget nunc scelerisque. Nunc
						scelerisque viverra mauris in. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Ornare arcu odio ut sem nulla
						pharetra diam. Congue mauris rhoncus aenean vel elit.
					</p></div> : null}

					{this.state.showingAv5 === true ? <div><h3 className="aboutUs__empl__Name">Russel Petters</h3><p className="aboutUs__empl__Copy">
						Egestas sed sed risus pretium quam vulputate dignissim. Commodo elit at imperdiet dui. Malesuada fames ac turpis egestas
						integer eget aliquet. Aliquam nulla facilisi cras fermentum odio eu feugiat. Sed risus pretium quam vulputate dignissim
						suspendisse. Id leo in vitae turpis massa sed. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Arcu felis
						bibendum ut tristique et egestas quis ipsum.
					</p></div> : null}

					{this.state.showingAv6 === true ? <div><h3 className="aboutUs__empl__Name">Sage Helfer</h3><p className="aboutUs__empl__Copy">
						Egestas sed sed risus pretium quam vulputate dignissim. Commodo elit at imperdiet dui. Malesuada fames ac turpis egestas
						integer eget aliquet. Aliquam nulla facilisi cras fermentum odio eu feugiat. Sed risus pretium quam vulputate dignissim
						suspendisse. Id leo in vitae turpis massa sed. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Arcu felis
						bibendum ut tristique et egestas quis ipsum.
					</p></div> : null}
				</div>
>>>>>>> aboutUs
			</div>
		)
	}
}

export default AboutUs;