import React from "react";
import mapImageMarker from "../images/map-marker.svg";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

import "../styles/pages/orphanages-map.css";

function OrphanagesMap() {
	return (
		<div className="page-map">
			<aside>
				<header>
					<img src={mapImageMarker} alt="Happy" />

					<h2> Escolha um orfanato no mapa</h2>
					<p> Muitas crianças estão esperando a sua visita.</p>
				</header>

				<footer>
					<strong>São Paulo, SP</strong>
				</footer>
			</aside>
			<div></div>
			<Link to=" " className="createOrphanage">
				<FiPlus size={32} color="#FFF" />
			</Link>
		</div>
	);
}

export default OrphanagesMap;
