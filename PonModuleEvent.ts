///<reference path="../asevent/AsEvent.ts"/>

namespace pon87.modules {
	import AsEvent = event.AsEvent;

	/**
	 * @version 0.0.1
	 * @author chitose
	 */
	export class PonModuleEvent extends AsEvent {
		static CREATED_VIEW: string = "createdView";
		static CREATED_STYLE: string = "createdStyle";
	}

}
