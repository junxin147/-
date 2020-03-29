package com.cy.tpes.controller.hjx;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
@Component
public class SpringbootEmail {
    @Autowired
    private JavaMailSender mailSender;

    public void sendMail(String emailForm, String emailTo, String title, String context) {
        MimeMessage mimeMessage = mailSender.createMimeMessage();
        MimeMessageHelper helper;

        try {
            helper = new MimeMessageHelper(mimeMessage, true);
            helper.setFrom(emailForm);
            helper.setTo(emailTo);
            helper.setSubject(title);//主题
            helper.setText(context);//正文
            mailSender.send(mimeMessage);
            System.out.println("成功发送邮件出去");
        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }
}
