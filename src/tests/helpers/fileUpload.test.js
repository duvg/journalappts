import cloudinary from 'cloudinary';
import { fileUpload } from '../../helpers/fileUpload';

//@ts-ignore
cloudinary.config({ 
  cloud_name: 'dwqmykf5q', 
  api_key: '953278262744925', 
  api_secret: 'WsWo1LJpTZfizbfurRcjBCUamIc',
  secure: true
});

describe('pruebas fileUpload', () => {

    test('Cargar un archivo y retornar url', async ( ) => {
        
        const resp = await fetch('https://cdn.pixabay.com/photo/2021/01/29/08/10/musician-5960112_960_720.jpg');
        const blob = await resp.blob();

        const file = new File([blob], 'foto.png');
        const url = await fileUpload(file);
        
        expect(typeof url).toBe('string');

        // Delete image by Id
        const segments = url.split('/');
        const imageId = segments[segments.length - 1].replace('.jpg', '');

        console.log(imageId);

        cloudinary.v2.api.delete_resources(imageId, {}, () => {});
    });

    test('debe retornar un error', async () => {

        const file = new File([], 'foto.png');
        const url = await fileUpload(file);

        
        expect(url).toEqual(null);
        //expect(typeof url).toBe(null);

    })
});