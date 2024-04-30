export type Direccion = "norte" | "sur" | "este" | "oeste";

function navegar(direccion: Direccion) {
    if (direccion === 'norte') {
      console.log('Te estás dirigiendo hacia el norte.');
    } else if (direccion === 'sur') {
      console.log('Te estás dirigiendo hacia el sur.');
    } else if (direccion === 'este') {
      console.log('Te estás dirigiendo hacia el este.');
    } else if (direccion === 'oeste') {
      console.log('Te estás dirigiendo hacia el oeste.');
    }
  }
navegar('norte');