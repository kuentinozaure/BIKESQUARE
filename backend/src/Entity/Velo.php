<?php
namespace  App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\ManyToOne;
use Doctrine\ORM\Mapping\JoinColumn;

/**
 * @ORM\Entity()
 * @ORM\Table(name="VELO")
 */
class Velo
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue
     */
    protected $id;

    /**
     * @ORM\Column(type="string", length=1000)
     */
    protected $titre;

    /**
     * @ORM\Column(type="string",length=1000)
     */
    protected $libelle;
    /**
     * @ORM\Column(type="float",length=255)
     */
    protected $prix;
    /**
     * @ORM\Column(type="string",length=1000)
     */
    protected $image;

    /**
     * @ManyToOne(targetEntity="TypeVelo")
     * @JoinColumn(name="typeVelo_id", referencedColumnName="id")
     */
    protected $idTypeVelo;

    public function getId()
    {
        return $this->id;
    }

    public function getTitre()
    {
        return $this->titre;
    }

    public function getLibelle()
    {
        return $this->libelle;
    }

    public function getPrix()
    {
        return $this->prix;
    }
    public function getImage()
    {
        return $this->image;
    }
    public function getIdTypeVelo()
    {
      return $this->idTypeVelo;
    }

    public function setId($id)
    {
        $this->id = $id;
        return $this;
    }
    public function setTitre($titre)
    {
        $this->titre = $titre;
        return $this;
    }
    public function setLibelle($lbl)
    {
        $this->libelle = $lbl;
        return $this;
    }

    public function setImage($img)
    {
        $this->image = $img;
        return $this;
    }
    public function setIdTypeVelo($Idtype)
    {
      $this->idTypeVelo = $Idtype;
      return $this;
    }
}
