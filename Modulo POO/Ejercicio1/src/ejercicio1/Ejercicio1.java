package ejercicio1;

import entrada.Entrada;

public class Ejercicio1 {

	public static void main(String[] args) {
		
		Entrada entrada = new Entrada();
		int i;
				
		Password[] passwd = new Password[20];
		for(i=0;i<passwd.length;i++){
			passwd[i]=new Password();
			passwd[i].setLongitud(entrada.obtenerEntero("De que longitud quieres la contraseña numero " + (i+1) + ": "));
		}
			
		System.out.println("Nº|\tFortaleza\t|Contraseña");
		System.out.println("-------------------------------------");
		for(i=0;i<passwd.length;i++){
			passwd[i].generarPassword();
			System.out.printf("%s\t%s\t\t%s%n",(i+1),passwd[i].esFuerte(),passwd[i].getContraseña());
		}
	}

}
