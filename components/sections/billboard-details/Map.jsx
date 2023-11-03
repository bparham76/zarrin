'use client';
import { MapContainer, TileLayer, Marker, Circle } from 'react-leaflet';
import { icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ center = [0, 0] }) => {
	const attribution = `<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`;

	return (
		<MapContainer
			style={{ height: '100%', width: '100%', zIndex: '0' }}
			center={center}
			scrollWheelZoom={false}
			zoom={13}>
			<TileLayer
				attribution={attribution}
				accessToken={
					'SbfMufRtCh4GpLGoNwzXkoO708ZT3s4WTN9m9KiZrrtIAnbAMQsTF140dzXDJmvv'
				}
				url='https://{s}.tile.jawg.io/jawg-sunny/{z}/{x}/{y}{r}.png?access-token={accessToken}'
			/>
			<Circle
				center={center}
				radius={500}
			/>
		</MapContainer>
	);
};

export default Map;
