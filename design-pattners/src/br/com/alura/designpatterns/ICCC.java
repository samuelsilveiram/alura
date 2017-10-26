package br.com.alura.designpatterns;

public class ICCC implements Imposto {

	@Override
	public double calcula(Orcamento orcamento) {
		double valor = orcamento.getValor();
		double porcentagem = 0;
		double fixo = 0;
				
		if(valor < 1000){
			porcentagem = 0.05;
		}else if(valor >= 1000 && valor <= 3000){
			porcentagem = 0.07;
		}else{
			porcentagem = 0.08;
			fixo = 30;
		}
		
		return (valor * porcentagem) + fixo;
	}

}
