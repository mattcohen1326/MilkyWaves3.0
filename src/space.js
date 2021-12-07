import React from 'react';
import Spaceship from './Spaceship.js';
import Hologram from './Hologram.js';

class Desc extends React.Component{
	constructor(props){
		super(props);
	}
	
	render(){
	return(
		<div id ="space-content">
				<h1>{this.props.title}</h1>
				<p>{this.props.message}</p>
		</div>
	);
	}
}
class SpaceWarp extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
		<>
			<div class = "attempt">
			<div class="scene">
			  <div class="wrap">
				  <div class="wall wall-right"></div>
				  <div class="wall wall-left"></div>   
				  <div class="wall wall-top"></div>
				  <div class="wall wall-bottom"></div> 
				  <div class="wall wall-back"></div>    
			  </div>
			  <div class="wrap">
				  <div class="wall wall-right"></div>
				  <div class="wall wall-left"></div>   
				  <div class="wall wall-top"></div>
				  <div class="wall wall-bottom"></div>   
				  <div class="wall wall-back"></div>    
			  </div>
			</div>
			</div>
			<Hologram />
			
			<Desc title="test" message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere sed nisi vel accumsan. In nec metus at neque aliquet porttitor finibus ultrices turpis. Nunc posuere augue risus, scelerisque euismod ante scelerisque quis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse laoreet faucibus cursus. Integer eget odio vitae erat semper accumsan at ut elit. Suspendisse consequat tortor nibh, non pulvinar dui pharetra ac. Sed lacinia ultrices augue, ut semper dui consectetur sit amet.Aenean et tellus ut diam fringilla laoreet. Praesent eleifend hendrerit vestibulum. Morbi quis dolor nisl. Nunc eleifend auctor est, eget laoreet nunc eleifend in. Vivamus egestas mauris et cursus vehicula. Cras pharetra mauris et auctor vulputate. Nunc interdum malesuada magna in aliquam. Sed tempor leo odio, et convallis nibh feugiat a. Nunc dapibus ipsum id viverra ultrices. Ut sit amet sapien placerat, rutrum mauris ac, accumsan massa. Vestibulum tortor mi, pellentesque tempus eros sit amet, tempus aliquam nulla. Quisque lorem arcu, interdum ut cursus id, tincidunt a sapien. Nulla placerat hendrerit accumsan. Phasellus placerat semper bibendum.uspendisse id tincidunt urna. Fusce orci ligula, sagittis nec tellus vel, luctus dictum sapien. Donec interdum iaculis nulla, ut ullamcorper purus pulvinar eget. Proin a commodo mauris. Integer vestibulum eros in neque semper, at rutrum dolor sagittis. Aliquam ac massa auctor, egestas leo at, posuere odio. Suspendisse feugiat lorem ac diam malesuada laoreet. Cras id felis fringilla, efficitur dolor quis, posuere quam. Vivamus nec porta dolor. Morbi vel nibh sollicitudin, sollicitudin lorem vitae, egestas mauris. Donec sed varius augue. In vitae tortor ut sapien luctus pharetra ac at quamMaecenas eget semper enim, in semper est. Sed viverra purus eu dui posuere malesuada. In sem erat, sodales sit amet viverra non, mollis nec sem. Sed pulvinar vestibulum nulla, vitae malesuada lectus semper luctus. Curabitur vel eleifend ipsum, vitae rutrum erat. Praesent mollis orci id odio rhoncus tempus. Sed vitae ipsum facilisis, pharetra erat eget, fermentum ipsum. Sed pulvinar pulvinar auctor. In sit amet sollicitudin sem. Sed convallis libero hendrerit ex convallis, eget suscipit orci consectetur. Donec luctus molestie mauris, ut convallis lacus efficitur et.Cras accumsan vel elit at vehicula. Pellentesque egestas tellus non velit cursus ultricies. Maecenas pharetra sagittis mauris, non rhoncus magna vestibulum porta. Fusce sit amet congue justo. Mauris mollis fermentum vehicula. Donec imperdiet a eros ut consectetur. Etiam condimentum, purus vel aliquam tempus, eros dolor gravida velit, id commodo augue neque vitae arcu. Morbi eget felis at erat maximus blandit malesuada id risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere sed nisi vel accumsan. In nec metus at neque aliquet porttitor finibus ultrices turpis. Nunc posuere augue risus, scelerisque euismod ante scelerisque quis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse laoreet faucibus cursus. Integer eget odio vitae erat semper accumsan at ut elit. Suspendisse consequat tortor nibh, non pulvinar dui pharetra ac. Sed lacinia ultrices augue, ut semper dui consectetur sit amet.Aenean et tellus ut diam fringilla laoreet. Praesent eleifend hendrerit vestibulum. Morbi quis dolor nisl. Nunc eleifend auctor est, eget laoreet nunc eleifend in. Vivamus egestas mauris et cursus vehicula. Cras pharetra mauris et auctor vulputate. Nunc interdum malesuada magna in aliquam. Sed tempor leo odio, et convallis nibh feugiat a. Nunc dapibus ipsum id viverra ultrices. Ut sit amet sapien placerat, rutrum mauris ac, accumsan massa. Vestibulum tortor mi, pellentesque tempus eros sit amet, tempus aliquam nulla. Quisque lorem arcu, interdum ut cursus id, tincidunt a sapien. Nulla placerat hendrerit accumsan. Phasellus placerat semper bibendum.uspendisse id tincidunt urna. Fusce orci ligula, sagittis nec tellus vel, luctus dictum sapien. Donec interdum iaculis nulla, ut ullamcorper purus pulvinar eget. Proin a commodo mauris. Integer vestibulum eros in neque semper, at rutrum dolor sagittis. Aliquam ac massa auctor, egestas leo at, posuere odio. Suspendisse feugiat lorem ac diam malesuada laoreet. Cras id felis fringilla, efficitur dolor quis, posuere quam. Vivamus nec porta dolor. Morbi vel nibh sollicitudin, sollicitudin lorem vitae, egestas mauris. Donec sed varius augue. In vitae tortor ut sapien luctus pharetra ac at quamMaecenas eget semper enim, in semper est. Sed viverra purus eu dui posuere malesuada. In sem erat, sodales sit amet viverra non, mollis nec sem. Sed pulvinar vestibulum nulla, vitae malesuada lectus semper luctus. Curabitur vel eleifend ipsum, vitae rutrum erat. Praesent mollis orci id odio rhoncus tempus. Sed vitae ipsum facilisis, pharetra erat eget, fermentum ipsum. Sed pulvinar pulvinar auctor. In sit amet sollicitudin sem. Sed convallis libero hendrerit ex convallis, eget suscipit orci consectetur. Donec luctus molestie mauris, ut convallis lacus efficitur et.Cras accumsan vel elit at vehicula. Pellentesque egestas tellus non velit cursus ultricies. Maecenas pharetra sagittis mauris, non rhoncus magna vestibulum porta. Fusce sit amet congue justo. Mauris mollis fermentum vehicula. Donec imperdiet a eros ut consectetur. Etiam condimentum, purus vel aliquam tempus, eros dolor gravida velit, id commodo augue neque vitae arcu. Morbi eget felis at erat maximus blandit malesuada id risus."/>
			
			<Spaceship />
		</>
		);
	}
}

export default SpaceWarp;