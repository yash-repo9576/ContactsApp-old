import React from 'react';

class AddContact extends React.Component {
	state = {
		name: "",
		email: "",
		phone: ""
	};
	add = (e) => {
		e.preventDefault();
		if(this.state.name==="" || this.state.email==="" || this.state.phone==="") {
			alert("All fields are Mendatory!");
			return
		}
		this.props.addContactHandler(this.state);
		this.props.setShowAddBox(false);
		// clear state
		this.setState({name:"", email:"", phone:""});
	}
	render() {
		return (
			<div className="w-auto px-8 py-4 max-w-3xl mx-auto my-4 bg-white rounded-lg shadow-lg">
				<h2 className="pb-4 text-xl font-medium border-b-2 border-slate-200">Add Contact</h2>
				<div className="p-6 max-w-lg mx-auto my-4 bg-slate-200 rounded-lg shadow-lg">
					<form onSubmit={this.add}>
						<div className="m-2 flex justify-around">
							<div>
								<div className="py-2">
									<label className="mx-2 pr-1 text-center font-medium">Name</label>
									<input className="pl-2 border-2 border-slate-300 rounded-md" type="text" name="name" placeholder="Name" value={this.state.name} onChange={(e)=>this.setState({name: e.target.value})}/>
								</div>
								<div className="py-2">
									<label className="mx-2 pr-2 text-center font-medium">Email</label>
									<input className="pl-2 border-2 border-slate-300 rounded-md" type="text" name="email" placeholder="Email" value={this.state.email} onChange={(e)=>this.setState({email: e.target.value})}/>
								</div>
								<div className="py-2">
									<label className="mx-2 text-center font-medium">Phone</label>
									<input className="pl-2 border-2 border-slate-300 rounded-md" type="text" name="phone" placeholder="Phone Number" value={this.state.phone} onChange={(e)=>this.setState({phone: e.target.value})}/>
								</div>
							</div>
							<button>
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</button>
						</div>
					</form>
				</div>
			</div>
		)
	}
}

export default AddContact;