package PRUEBAS;

import javax.swing.*;
import java.awt.*;

public class InterfazPam extends JFrame {
    private inicioPAM pam;

    public InterfazPam(){
        pam = new inicioPAM();

        setTitle("Aplicación PAM - Reglamento y Lineamientos");
        setSize(800, 500); 
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new BorderLayout());

        
        JPanel panelBotones = new JPanel();
        panelBotones.setLayout(new GridLayout(4, 1, 10, 10)); 

        JButton botonReglamento = new JButton("Reglamento POO");
        JButton botonLineamientos = new JButton("Lineamientos Classroom");
        JButton botonFechasParcial = new JButton("Fechas de Parciales");
        JButton botonPorcentajes = new JButton("Porcentajes por parcial");

        panelBotones.add(botonReglamento);
        panelBotones.add(botonLineamientos);
        panelBotones.add(botonFechasParcial);
        panelBotones.add(botonPorcentajes);

        
        JTextArea areaTexto = new JTextArea();
        areaTexto.setEditable(false);
        areaTexto.setLineWrap(true);
        areaTexto.setWrapStyleWord(true);
        
        JScrollPane scrollPane = new JScrollPane(areaTexto);
        scrollPane.setPreferredSize(new Dimension(580, 350));

       
        add(panelBotones, BorderLayout.NORTH);
        add(scrollPane, BorderLayout.CENTER);

       
        botonReglamento.addActionListener(e -> areaTexto.setText(pam.ReglamentoPOO()));
        botonLineamientos.addActionListener(e -> areaTexto.setText(pam.LineamientosClassroom()));
        botonFechasParcial.addActionListener(e -> areaTexto.setText(pam.fechasParciales()));
        botonPorcentajes.addActionListener(e -> areaTexto.setText(pam.porcentajesPorParcial()));
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            InterfazPam interfaz = new InterfazPam();
            interfaz.setLocationRelativeTo(null); 
            interfaz.setVisible(true);
        });
    }
}