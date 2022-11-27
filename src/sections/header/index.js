export const Header = document.createElement("div");
import './index.scss'

Header.innerHTML =
	`
	
	<header class="header">
		<div class="container">
			<div class="header-wrapper">
				<div class="header-menu">
					<button id="add">Add</button>
					<button id="fill">Fill</button>
					<button id="del">Delete</button>
					<button id="clear">Clear</button>
				</div>			
			</div>
		</div>
	</header>
	
	`