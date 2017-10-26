package br.com.alura.designpatterns;

public class Orcamento {

	private double valor;

	public Orcamento(double valor) {
		this.valor = valor;

	}

	public double getValor() {
		return valor;
	}
	
	public void efetuaCredito(double valorCredito){
		this.valor = valor + valorCredito;
	}

}
