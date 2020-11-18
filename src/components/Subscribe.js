import React, { Component } from 'react'
import HubspotForm from 'react-hubspot-form'


class Subscribe extends Component {
	render() {
		return (
			<div className="mx-auto bg-gray-300 p-12 px-16">
				<div className="container mx-auto p-12">
					<div className="relative flex flex-col min-w-0 break-words bg-white w-full pb-8 shadow-2xl rounded-lg">
						<div className="px-4 py-4">
							<HubspotForm 
								portalId='8728743'
								formId='245e4f50-db15-4171-93f2-01753a340b3d'
								onSubmit={() => console.log('Submit!')}
								onReady={(form) => console.log('Form ready!')}
								loading={<div>Loading...</div>}
							/>
						</div>

					</div>
				</div>
			</div>
		)
	}
}

export default Subscribe